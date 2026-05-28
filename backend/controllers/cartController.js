import userModel from "../models/userModel.js";

// add to user cart
const addToCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.body.userId);

    if (!userData) {
      return res.json({
        success: false,
        message: "User not found. Please login again."
      });
    }

    const cartData = userData.cartData || {};

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });

    res.json({
      success: true,
      message: "Added To Cart"
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error"
    });
  }
};

// remove food from user cart
const removeFromCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.body.userId);

    if (!userData) {
      return res.json({
        success: false,
        message: "User not found. Please login again."
      });
    }

    const cartData = userData.cartData || {};

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });

    res.json({
      success: true,
      message: "Removed From Cart"
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error"
    });
  }
};

// get user cart
const getCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.body.userId);

    if (!userData) {
      return res.json({
        success: false,
        message: "User not found. Please login again.",
        cartData: {}
      });
    }

    const cartData = userData.cartData || {};

    res.json({
      success: true,
      cartData
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
      cartData: {}
    });
  }
};

export { addToCart, removeFromCart, getCart };