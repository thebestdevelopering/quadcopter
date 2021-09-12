import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  Button,
  Container,
  TextField,
  FormControl,
  MenuItem,
  Select,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { addImage, addProduct } from "../../../redux/features/products";
import Header from "../HomePage/Header";
import { loadCategories } from "../../../redux/features/categories";
import { useEffect } from "react";

function AddProduct() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const categories = useSelector((state) => state.categories.items);
  console.log(categories);

  const handleAddName = (e) => {
    setName(e.target.value);
  };

  const handleAddPrice = (e) => {
    setPrice(e.target.value);
  };

  const handleAddDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAddCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleAddImage = async (e) => {
    await dispatch(addImage(e));
  };

  const handleAddProduct = () => {
    dispatch(addProduct(name, price, description, category));
  };

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <TextField
        id="outlined-multiline-static"
        label="Введите имя"
        multiline
        rows={1}
        value={name}
        onChange={handleAddName}
        variant="outlined"
      />
      <TextField
        id="outlined-multiline-static"
        label="Введите стоимость"
        multiline
        rows={1}
        value={price}
        onChange={handleAddPrice}
        variant="outlined"
      />
      <TextField
        id="outlined-multiline-static"
        label="Введите описание"
        multiline
        rows={3}
        value={description}
        onChange={handleAddDescription}
        variant="outlined"
      />
      <Paper>
        <Typography align="center">Выберите категорию</Typography>
        <FormControl>
          <Select
            value={category}
            onChange={handleAddCategory}
            inputProps={{ "aria-label": "Without label" }}
          >
            {categories.map((item) => (
              <MenuItem key={item.value} value={item._id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Paper>

      <Button onClick={handleAddProduct} variant="contained" color="primary">
        Добавить
      </Button>
      <div>
        <Button onChange={handleAddImage} variant="contained">
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleAddImage}
          />
        </Button>
      </div>
    </Container>
  );
}
export default AddProduct;
