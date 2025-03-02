import { useState } from "react";

const sellStock = ({ portfolio, onSellStock }) => {
  const [formData, setFormData] = useState({
    stockSymbol: "",
    quantity: 0,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const formErrors = {};

    if (formData.stockSymbol === "") {
      formErrors.stockSymbol = "Stock symbol is required";
    }
    if (formData.quantity <= 0) {
      formErrors.quantity = "Quantity must be greater than 0";
    }
    if (formData.quantity > portfolio[formData.stockSymbol]) {
      formErrors.quantity = "You don't have enough stocks to sell";
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    onSellStock(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-800 text-white p-6 rounded-lg max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold mb-4">Vender Acciones</h2>
    </form>
  );
};

export default sellStock;
