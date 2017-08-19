import React, { Component } from "react";
import { Text, View, Button, Image, Alert } from "react-native";
import { SwipeDeck, Card, Icon } from "react-native-elements";
import { RoundButton } from "../components";
import { styles } from "../styles";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: require("../../img/like.png"),
      dislike: require("../../img/dislike.png"),
      user: {
        name: "PumpkinCat",
        img: require("../../img/person.png")
      },
      users: [
        {
          id: 1,
          name: "Victor I. Afolabi",
          age: 22,
          img: require("../../img/person.png")
        },
        {
          id: 2,
          name: "Banjo Mofesola Paul",
          age: 24,
          img: require("../../img/person.png")
        },
        {
          id: 3,
          name: "Tomiide Oladipo",
          age: 20,
          img: require("../../img/person.png")
        },
        {
          id: 4,
          name: "Engr. Longe Dotun",
          age: 23,
          img: require("../../img/person.png")
        },
        {
          id: 5,
          name: "Ifedayo",
          age: 24,
          img: require("../../img/person.png")
        }
      ]
    };
    // bindings
    this.goToConversation = this.goToConversation.bind(this);
  }

  static navigationOptions = {
    title: "Home page"
  };

  goToConversation() {
    this.props.navigation.navigate("Conversation", {
      users: this.state.user.name
    });
  }

  onSwipeRight(card) {
    console.log("Card liked: " + card.name);
  }

  onSwipeLeft(card) {
    console.log("Card disliked: " + card.name);
  }

  renderCard(card) {
    return (
      <Card containerStyle={styles.card}>
        <Image
          source={card.img}
          style={styles.cardImg}
          width={300}
          height={350}
        />
        <Text style={styles.cardText}>
          {card.name}
        </Text>
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card containerStyle={styles.card}>
        <Image
          source={card.img}
          // style={styles.cardImg}
          width={300}
          height={350}
        />
        <Text style={styles.cardText}>
          Oops! That's all the users we got for now!
        </Text>
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <SwipeDeck
          data={this.state.users}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={this.onSwipeRight}
          onSwipeLeft={this.onSwipeLeft}
        />
        <View>
          <Icon
            name="heartbeat"
            type="font-awesome"
            color="#f00"
            onPress={() => console.log("hello")}
          />
        </View>
      </View>
    );
  }
}

export default Home;
