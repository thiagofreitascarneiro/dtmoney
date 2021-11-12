import styled from 'styled-components';

export const Container = styled.form`

h2 {    
    color: var(--text-title);
}

input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7d7d7;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
        color: var(--text-body);
    }

    & + input {
        margin-top: 1rem;
    }
}

button[type="submit"] {
    width: 100
}

`;