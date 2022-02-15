import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Button, Container, TextField } from '@material-ui/core';
import { addImage } from '../../../redux/features/products';
import { editProducts } from '../../../redux/features/products';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { loadCategories } from '../../../redux/features/categories';
import { useEffect } from 'react';
import MainPagesProduct from '../HomePage/MainPagesProduct';
import { useParams } from 'react-router-dom';

function EditProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const categories = useSelector((state) => state.categories.items);
  console.log(categories);

  const handleAddName = (e) => {
    setName(e.target.value);
  };
  const handleAddCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleAddPrice = (e) => {
    setPrice(e.target.value);
  };

  const handleAddImage = async (e) => {
    await dispatch(addImage(e));
  };

  const handleAddProduct = () => {
    dispatch(editProducts(id, name, price, category));
  };

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  return (
    <Container>
      <MainPagesProduct />
      <h3>Изменение товара</h3>

      <TextField
        id="outlined-multiline-static"
        label="Название товара"
        multiline
        rows={1}
        value={name}
        onChange={handleAddName}
        variant="outlined"
      />
      <TextField
        id="outlined-multiline-static"
        label="Выберите категорию"
        multiline
        rows={1}
        value={category}
        onChange={handleAddCategory}
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
      <Paper>
        <Typography align="center">Выберите категорию</Typography>
        <FormControl>
          <Select
            value={category}
            onChange={handleAddCategory}
            inputProps={{ 'aria-label': 'Without label' }}
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
export default EditProduct;
