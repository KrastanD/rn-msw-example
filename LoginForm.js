import React, { useState, useCallback, useEffect } from "react";
import { TextInput, View, Text, Button } from "react-native";

export const LoginForm = () => {
  // Store the username so we can reference it in a submit handler
  const [username, setUsername] = useState("");

  // Create state for the user data we are going to receive
  // from the API call upon form submit.
  const [userData, setUserData] = useState(null);

  // Whenever we change our username input's value
  // update the corresponding state's value.
  const handleUsernameChange = useCallback((name) => {
    setUsername(name);
  }, []);

  // Create state for old username where we will store data
  // received from the GET API call
  const [cookie, setCookie] = useState();

  useEffect(() => {
    // Perform a GET /cookie request to get the cookie on page load
    async function fetchData() {
      const resp = await fetch("https://example.com/cookie");
      const json = await resp.json();
      setCookie(json.message);
    }
    fetchData();
  }, []);

  // Handle a submit event
  const handleSubmit = useCallback(() => {
    // Perform a POST /login request and send the username
    fetch("https://example.com/login", {
      method: "POST",
      body: JSON.stringify({
        username,
      }),
    })
      .then((res) => res.json())
      // Update the state with the received response
      .then(setUserData);
  }, [username]);

  if (userData) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
          <Text testID="firstName">{userData.firstName}</Text>{" "}
          <Text testID="lastName">{userData.lastName}</Text>
        </Text>
        <Text testID="result-username">{userData.username}</Text>
        <Text testID="userId">{userData.id}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {cookie && <Text>Last logged in as: {cookie}</Text>}
      <View style={{ flexDirection: "row" }}>
        <Text htmlFor="username">Username: </Text>
        <TextInput
          style={{ borderColor: "black", borderWidth: 1, width: 150 }}
          id="username"
          name="username"
          placeholder="Enter username"
          value={username}
          onChangeText={handleUsernameChange}
        />
      </View>

      <Button onPress={() => handleSubmit()} title="Submit" />
    </View>
  );
};
