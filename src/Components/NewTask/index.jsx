import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import del from '../../assets/delete.svg'

const Container = styled.div`
    background: #fff;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    height: 40px; 
    box-sizing: border-box;
    border-radius: 10px;   
    max-width: 900px;
    margin: 5px auto;
    ${({ done }) => done && css`
        background: rgba(117, 117, 117, 0.73);
    `}
`

const Titulo = styled.p`
    font-weight: bold;
    ${({ done }) => done && css`
        text-decoration: line-through;
        color: rgb(117, 117, 117);
    `}
`

const Img = styled.img`
    width: 25px;
`

export default function NewTask({ id, tarefa, onRemoveTask }) {
    const [done, setDone] = useState('');

    function handleRemove() {
        onRemoveTask(id);
    }
    function handleCheckbox() {
        setDone(!done);
    }

    return (
        <Container done={done}>
            <input type='checkbox' checked={done} onChange={handleCheckbox}/>
            <Titulo done={done}>{tarefa}</Titulo>
            <div>
                <a href="#" onClick={handleRemove}>
                    <Img src={del} alt='del'/>
                </a>
            </div>
        </Container>
    );
}