import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeOneFromCart, clearCart } from "../../redux/slices/cartSlice";

const CartScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    const handleClearCart = () => {
        Alert.alert(
            "Confirm Action",
            "Are you sure you want to clear the cart?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Yes",
                    onPress: () => dispatch(clearCart()),
                },
            ]
        );
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Your Cart</Text>

            {cartItems.length === 0 ? (
                <Text style={styles.emptyCart}>Cart is empty</Text>
            ) : (
                <>
                    <FlatList
                        data={cartItems}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.cartItem}>
                                <Text style={styles.itemText}>{item.name} (x{item.quantity})</Text>
                                <Text style={styles.itemPrice}>${item.totalPrice.toFixed(2)}</Text>

                                <TouchableOpacity onPress={() => dispatch(removeOneFromCart(item))} style={styles.actionButton}>
                                    <Text style={styles.actionButtonText}>-</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => dispatch(addToCart(item))} style={styles.actionButton}>
                                    <Text style={styles.actionButtonText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />

                    <Text style={styles.total}>Total: ${totalAmount.toFixed(2)}</Text>

                    {/* Refresh All with Alert */}
                    <Button title="Refresh All" onPress={handleClearCart} color="red" />

                    {/* Continue Shopping */}
                    <Button title="Continue Shopping" onPress={() => navigation.navigate("Home")} color="blue" />
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    emptyCart: {
        fontSize: 18,
        color: "gray",
        textAlign: "center",
        marginTop: 20,
    },
    cartItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderBottomWidth: 1,
        alignItems: "center",
    },
    itemText: {
        fontSize: 18,
    },
    itemPrice: {
        fontSize: 18,
        fontWeight: "bold",
        color: "green",
    },
    actionButton: {
        backgroundColor: "blue",
        padding: 8,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    actionButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },
    total: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "right",
        marginTop: 20,
    },
});

export default CartScreen;


