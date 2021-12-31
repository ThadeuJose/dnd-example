import React from "react";
import { Container } from "./styles";
import { Draggable } from "react-beautiful-dnd";

export default class Task extends React.Component{
    render(){
        const isDragDisabled = this.props.task.id === 'task-1';
        return (
            <Draggable 
                draggableId={this.props.task.id} 
                index ={this.props.index}
                isDragDisabled = {isDragDisabled}
            >
                {(provided, snapshot) => (
                    <Container {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    isDragDisabled = {isDragDisabled}
                   >                    
                        {this.props.task.content}
                    </Container>
                )}                
            </Draggable>
        );
    }
}