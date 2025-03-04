import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

const productDetails = {
  "1": "A beautiful girls' dress, perfect for casual and party wear. Made with high-quality fabric for comfort.",
  "2": "A premium quality men's shirt, suitable for formal and casual occasions. Soft and breathable material.",
  "3": "Trendy and stylish T-shirt with a comfortable fit. Ideal for daily wear.",
  "4": "Traditional Shalwar Kameez with intricate embroidery. Best for cultural events and formal gatherings.",
  "5": "Elegant Kurta made with pure cotton. A perfect blend of tradition and style.",
};

const ProductDetailsScreen = ({ route, navigation }) => {
  const { id, name, price, image } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.price}>{price}</Text>

      {/* Product Description */}
      <Text style={styles.description}>
        {productDetails[id] || "No additional details available for this product."}
      </Text>

      {/* View Cart Button */}
      <View style={styles.buttonWrapper}>
        <Button title="View Cart" color="green" onPress={() => navigation.navigate("CartScreen")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 22,
    color: "green",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonWrapper: {
    width: "80%",
    marginVertical: 10,
  },
});

export default ProductDetailsScreen;
