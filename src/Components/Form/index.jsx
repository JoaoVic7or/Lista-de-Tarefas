import React, { useState } from 'react'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 0 auto;
    padding-bottom: 30px;
`
const Input = styled.input`
    padding: 10px;
    box-sizing: border-box;
    border-radius: 10px;
    font-size: 1rem;
    width: 80%;
`
const Button = styled.button`
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    width: 80%;
`

export default function Form({ onAddTask }) {
    const [tarefa, setTarefa] = useState('');

    function handleAddTask(e) {
        e.preventDefault();
        const newTask = {
            tarefa,
        };
        if(tarefa === ''){
            toast.warn("Dê um nome à tarefa",{
                autoClose: 3000,
                theme: 'dark'
            })
            return
        }
        onAddTask(newTask);
        setTarefa('');
    }
    return (
        <Container>
            <h1>Lista de Tarefas</h1>
            <Input
                type='text'
                placeholder='Tarefa'
                value={tarefa}
                onChange={e => setTarefa(e.target.value)}
            />
            <Button onClick={handleAddTask}>Adicionar</Button>
            <ToastContainer />
        </Container>
    )
}
