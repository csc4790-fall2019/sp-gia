package handlers

import (
	"encoding/json"
	"fmt"
	"goProjects/dormMate-api/db"
	. "goProjects/dormMate-api/models"
	"net/http"
)

const DOMAIN = "dormmate.com"

type DormMateAPI struct {
	myConnection *db.MongoConnection
}

type JSONstring string

func (j JSONstring) MarshalJSON([]byte, error) {
	return []byte(j), nil
}

func NewDormMateAPI() *DormMateAPI {
	DM := &DormMateAPI{
		myConnection: db.newDBConnection(),
	}
	return DM
}

func (dm *DormMateAPI) Root(w http.ResponseWriter, r *http.Request) {
	welcome := `{
					"welcome" : "we have lift off."
				}`
	content, _ := json.Marshal(JSONstring(welcome))
	fmt.Fprintf(w, "%s", string(content))
}

func (dm *DormMateAPI) CreateNewUserProfile(w http.ResponseWriter, r *http.Request) {
	reqBodyStruct := new(UserMapping)
	responseEncoder := json.NewEncoder(w)
	if err := json.NewDecoder(r.Body).Decode(&reqBodyStruct); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		if err := responseEncoder.Encode(&APIResponse{StatusMessage: err.Error()}); err != nil {
			fmt.Fprintf(w, "Error occurred while processing POST request %v \n", err.Error())
		}
		return
	}
	if err != nil {
		w.WriteHeader(http.StatusConflict)
		if err := responseEncoder.Encode(&APIResponse{StatusMessage: err.Error()}); err != nil {
			fmt.Fprintf(w, "Error %s occured while trying to add the user: \n", err.Error())
		}
	}
	responseEncoder.Encode(&APIResponse{StatusMessage: "Ok"})
}

func (Ls *LinkShortenerAPI) GetAllUsers(w http.ResponseWriter, r *http.Request) {
	allUsers := Ls.myConnection.GetUsers()

	var response UsersMappingRespMultiple
	response.Users = allUsers

	content, _ := json.Marshal(response)
	fmt.Fprintf(w, "%s \n", string(content))

	return
}
