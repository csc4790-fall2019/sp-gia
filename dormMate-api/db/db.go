package db

import (
	"errors"
	"fmt"

	. "goProjects/sp-gia/dormMate-api/models"

	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

const CONNECTIONSTRING = "127.0.0.1"

type MongoConnection struct {
	originalSession *mgo.Session
}

func NewDBConnection() (conn *MongoConnection) {
	conn = new(MongoConnection)
	conn.createConnection()
	return
}

func (c *MongoConnection) createConnection() (err error) {
	fmt.Println("Creating connection to database...")
	c.originalSession, err = mgo.Dial(CONNECTIONSTRING)
	if err == nil {
		fmt.Println("Connection established to database")
		UserCollection := c.originalSession.DB("dormmate").C("user-collection")
		if UserCollection == nil {
			err = errors.New("Collection failed, attempt manually")
		}
		index := mgo.Index{
			Key:      []string{"$text:id"},
			Unique:   false,
			DropDups: false,
		}
		UserCollection.EnsureIndex(index)
	} else {
		fmt.Printf("Error occured creating connection: %s", err.Error())
	}
	return
}

func (c *MongoConnection) closeConnection() {
	if c.originalSession != nil {
		c.originalSession.Close()
	}
}

func (c *MongoConnection) getSessionAndCollection() (session *mgo.Session, UserCollection *mgo.Collection, err error) {
	if c.originalSession != nil {
		session = c.originalSession.Copy()
		UserCollection = session.DB("dormmate").C("user-collection")
	} else {
		err = errors.New("No original session...")
	}
	return
}

func (c *MongoConnection) AddUser(id string, firstName string, lastName string, email string, gender string, class int, hometown string, major string, smoke bool, alcohol bool, snore bool, bio bool, bedtime bool, neatness bool) (err error) {
	session, UserCollection, err := c.getSessionAndCollection()

	if err == nil {
		defer session.Close()

		err = UserCollection.Insert(
			&UserMappingResp{
				Id:        bson.NewObjectId(),
				FirstName: firstName,
				LastName:  lastName,
				EMail:     email,
			},
		)
		if err != nil {
			if mgo.IsDup(err) {
				err = errors.New("Duplicate exists")
			}
		}
	}
	return
}

func (c *MongoConnection) GetUsers() []UserMappingResp {
	session, UserCollection, err := c.getSessionAndCollection()
	if err != nil {
		fmt.Printf("Error: %s", err)
		return nil
	}

	defer session.Close()

	var allUsers []UserMappingResp

	err = UserCollection.Find(nil).All(&allUsers)

	if err != nil {
		fmt.Printf("Could not retrieve collection. Error: %s", err.Error())
	}
	return allUsers
}
