

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import pic from '../assets/banner-books/book7.png';

const Books = () => {
     // Ensure MY_BACKEND_SITE is defined in your environment

    const [books, setBooks] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get('https://bookbazaar-01tn.onrender.com/api/books', {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
            setBooks(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            {books.map((book, index) => (
                <div key={index}>
                    <div className="w-full h-[260px] lg:flex p-3">
                        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                            <img className="h-[260px] w-full object-cover object-center" src={book.imageURL} alt="Woman holding a mug" />
                        </div>
                        <div className="border-r w-full h-[260px] border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-8">
                                <p className="text-sm text-gray-600 flex items-center">
                                    {book.category}
                                </p>
                                <div className="text-gray-900 font-bold text-xl mb-2">{book.bookTitle}</div>
                                <p className="text-gray-700 text-base ">{book.description}</p>
                                <div className="flex items-center">
                                    <img className="w-10 h-10 rounded-full mr-4" src={book.imageURL} alt="Avatar of Jonathan Reinink" />
                                    <div className="text-sm">
                                        <p className="text-gray-900 leading-none">{book.authorName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Books;
