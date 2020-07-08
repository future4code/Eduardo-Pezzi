import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";
import Post from "./components/Post";



test("Teste conteudo input", async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<App />);

        const textInput = getByPlaceholderText(/Novo post/i);
        const addButton = getByText(/Adicionar/i);


        fireEvent.change(textInput, { target: {value: 'teste'}} );
        fireEvent.click(addButton);

        let post = getByTestId('mostrador')

        expect(post).toHaveTextContent('teste')
})