package db

import (
	"errors"
	"fmt"
	//. "goProjects/dormMate-api/models"

	"gopkg.in/mgo.v2"
	//"gopkg.in/mgo.v2/bson"
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
		URLCollection := c.originalSession.DB("simple-url").C("url-collection")
		if URLCollection == nil {
			err = errors.New("Collection failed, attempt manually")
		}
		index := mgo.Index{
			Key:      []string{"$text:shortURL"},
			Unique:   false,
			DropDups: false,
		}
		URLCollection.EnsureIndex(index)
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

func (c *MongoConnection) getSessionAndCollection() (session *mgo.Session, URLCollection *mgo.Collection, err error) {
	if c.originalSession != nil {
		session = c.originalSession.Copy()
		URLCollection = session.DB("simple-url").C("url-collection")
	} else {
		err = errors.New("No original session...")
	}
	return
}
