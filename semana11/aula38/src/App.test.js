import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";



test("Teste conteudo input", async () => {
    const { getByPlaceholderText } = render(<App />);

        const text = getByPlaceholderText("Novo post");

        fireEvent.change(text, { target: {value: 'teste'}} );

        expect(text).toBe('teste')
})

