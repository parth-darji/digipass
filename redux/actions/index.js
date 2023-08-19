import { USER_STATE_CHANGE, CLEAR_DATA } from '../constants/index'
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

export function clearData() {
    return ((dispatch) => {
        dispatch({ type: CLEAR_DATA })
    })
}

export function fetchUser() {
    return ((dispatch) => {
        firebase.firestore()
            .collection("conductors")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    console.log(snapshot.data())
                    dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() })
                } else {
                    console.log('does not exist')
                }
            })
    })
}