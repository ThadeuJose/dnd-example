import React from "react";
import { Container } from "./styles";
import { Draggable } from "react-beautiful-dnd";

export default class Task extends React.Component{
    render(){
        return (
            <Draggable draggableId={this.props.task.id} index ={this.props.index}>
                {(provided, snapshot) => (
                    <Container {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    >                    
                        {this.props.task.content[0]}
                    </Container>
                )}                
            </Draggable>
        );
    }
}