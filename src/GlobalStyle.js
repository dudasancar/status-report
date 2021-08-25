import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Poppins'
    }
    div.ant-modal-content {
        border-radius: 1.25rem;
        border: 2px solid #EFF2F0;
        box-shadow: 0px 0px 15px #00221633;
    }
    div.ant-input-number {
        border-radius: 0.6rem;
        height: 2.5rem;
    }
    div.ant-picker {
        border-radius: 0.6rem;
        height: 2.5rem;
    }
    input.ant-input {
        border-radius: 0.6rem;
        height: 2.5rem;
    }
    textarea.ant-input {
        border-radius: 0.6rem;
    }
    button.ant-modal-close {
        display: none;
    }
    div.ant-modal-footer {
        display: none;
    }
    ul.ant-pagination {
        display: none;
    }
    button.ant-switch {
        right: 5px;
    }
    button.ant-switch-checked {
        background-color: #00BE7B;
    }
`;

export default GlobalStyle;