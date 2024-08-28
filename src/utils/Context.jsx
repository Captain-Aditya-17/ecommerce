import React, { createContext, useState } from 'react'
import { products } from '../assets/assets'

export const StoreContext = createContext()

const Context = (props) => {
    const [filteredProducts, setFilteredProducts] = useState(products)
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedSubCategory, setSelectedSubCategory] = useState('')
    const [active, setactive] = useState('')
    const [subactive, setsubactive] = useState('')
    const [cart, setcart] = useState([])
    const [selectSize, setselectSize] = useState({})


    const applyFilters = (category, subcategory) => {
        let filtered = products

        if (category) {
            filtered = filtered.filter(prod => prod.category === category)
        }

        if (subcategory) {
            filtered = filtered.filter(prod => prod.subCategory === subcategory)
        }

        setFilteredProducts(filtered)
    }

    const Catergoray = (category) => {
        if (selectedCategory === category) {
            setSelectedCategory('')
            setactive('')
            applyFilters('', selectedSubCategory)
        } else {
            setSelectedCategory(category)
            setactive(category)
            applyFilters(category, selectedSubCategory)
        }
    }


    const subCategory = (subcategory) => {
        if (selectedSubCategory === subcategory) {
            setSelectedSubCategory('')
            setsubactive('')
            applyFilters(selectedCategory, '')
        } else {
            setSelectedSubCategory(subcategory)
            setsubactive(subcategory)
            applyFilters(selectedCategory, subcategory)
        }
    }
    const CartValue = (product) => {
        setcart(prevCart => {
            const updatedCart = [...prevCart, product];

            return updatedCart;
        });
    };
    const remove = (productId) => {
        const copytask = [...cart]
        copytask.splice(productId, 1)
        setcart(copytask)
    };



    const sizeChanges = (item, productId) => {
        setselectSize((prevSizes) => ({
            ...prevSizes,
            [productId]: item,
        }));
    };
    const ContextValues = {
        products,
        filteredProducts,
        Catergoray,
        subCategory,
        active, setactive,
        subactive, setsubactive,
        CartValue,
        cart,
        remove,
        sizeChanges,
        selectSize


    }

    return (
        <StoreContext.Provider value={ContextValues}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default Context
