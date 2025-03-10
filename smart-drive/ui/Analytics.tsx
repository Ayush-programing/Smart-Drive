import { View, Text } from "react-native";
import React from "react";

export default function Analytics() {
  return (
    <React.Fragment>
      <View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#cccccc",
                padding: 10,
                margin: 10,
                justifyContent: "center",
                alignItems: "center",
                width: 120,
                height: 120,
                borderRadius: 100,
                flexDirection: "row",
              }}
            >
              {/* Make it Dynamic: */}
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>0</Text>
            </View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Driver Points
            </Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#cccccc",
                padding: 10,
                margin: 10,
                justifyContent: "center",
                alignItems: "center",
                width: 120,
                height: 120,
                borderRadius: 100,
                flexDirection: "row",
              }}
            >
              {/* Make it Dynamic: */}
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>0</Text>
            </View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Redeemed</Text>
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#cccccc",
                padding: 10,
                margin: 10,
                justifyContent: "center",
                alignItems: "center",
                width: 120,
                height: 120,
                borderRadius: 100,
                flexDirection: "row",
              }}
            >
              {/* Make it Dynamic: */}
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Rs. 0</Text>
            </View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Savings</Text>
          </View>
        </View>
      </View>
    </React.Fragment>
  );
}
