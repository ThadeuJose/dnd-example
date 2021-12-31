import React from "react";
import Task from "../Task/index";
import { Container,Title,TaskList } from "./styles";
import { Droppable } from "react-beautiful-dnd";

export default class Column extends React.Component{
    render(){
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                    {(provided,snapshot)=>(
                        <TaskList ref = {provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
                            {this.props.tasks.map((task,index) => (<Task key={task.id} task={task} index={index}/>))}
                            {provided.placeholder}
                        </TaskList>
                    )}                    
                </Droppable>
            </Container>
        );
    }
}