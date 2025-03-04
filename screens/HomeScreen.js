import React from "react";
import { View, FlatList, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const products = [
  {
    id: "1",
    name: "Girls-Dress",
    price: "$20",
    image: "https://media.burford.co.uk/images/SNY04089.jpg_edit.width-1440_05001m7uKQ0crRoI.jpg"
  },
  {
    id: "2",
    name: "Shirts",
    price: "$40",
    image: "https://www.shutterstock.com/image-photo/fashionable-clothes-boutique-store-london-600nw-589577570.jpg"
  },
  {
    id: "3",
    name: "T-Shirts",
    price: "$35",
    image: "https://www.kayazar.com/images/product_gallery/1633795820_6666666666.webp"
  },
  {
    id: "4",
    name: "Shalwar Kameez",
    price: "$50",
    image: "https://www.hussainitextileshop.com/wp-content/uploads/2023/08/jamalweb-4.jpg"
  },
  {
    id: "5",
    name: "Kurta",
    price: "$80",
    image: "https://kapok.pk/wp-content/uploads/2021/08/Imperial-Red-Kurta-1.webp"
  },
];

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const cartCount = cartItems.length;

  //  Header Right Side Cart Count Show
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Home",
      headerRight: () => (
        <View style={styles.cartIconContainer}>
          <Text style={styles.cartCount}>{cartCount}</Text>
        </View>
      ),
    });
  }, [cartCount, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>

            {/*  Add to Cart Button + Navigate to ProductDetails */}
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={() => {
                dispatch(addToCart(item)); 
                navigation.navigate("ProductDetails", { ...item });
              }}
            >
              <Text style={styles.buttonText}>🛒Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  cartIconContainer: {
    backgroundColor: "red",
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 15,
  },
  cartCount: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  product: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 150,
    height: 120,
    marginBottom: 5,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    color: "green",
    marginBottom: 5,
  },
  addToCartButton: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default HomeScreen;
