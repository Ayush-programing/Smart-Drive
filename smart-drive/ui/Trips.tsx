import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import getDummyTrips from "../helpers/api/apiDummyTrips";
import Logo from "./Logo";
import { useReusableQuery } from "../helpers/smart-drive-hooks";

function Trips() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   getDummyTrips().then((data) => setData(data));
  // }, []);

  const { data, isLoading, error } = useReusableQuery("Trips", getDummyTrips);

  return (
    <SafeAreaView>
      <Logo />
      <Text
        style={{
          marginTop: 50,
          fontWeight: "bold",
          fontSize: 25,
          marginLeft: 55,
        }}
      >
        Past Trips
      </Text>

      {!isLoading ? (
        <FlatList
          data={data}
          renderItem={({ item }) => <TripItem item={item} />}
          scrollEnabled={true}
        />
      ) : (
        <Text style={{ textAlign: "center" }}>Loading..</Text>
      )}
    </SafeAreaView>
  );
}

interface TripItemProps {
  item: any;
}

function TripItem({ item }: TripItemProps): JSX.Element {
  return (
    <View
      style={{
        margin: 50,
        backgroundColor: "#ccc",
        padding: 30,
        borderRadius: 10,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
      }}
    >
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>{item.trip_name}</Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginRight: 20 }}
      >
        <Text style={{ fontSize: 20 }}>Have a look</Text>
        <Ionicons name="arrow-forward-circle" size={20} color="#000" />
      </View>
    </View>
  );
}

export default Trips;
