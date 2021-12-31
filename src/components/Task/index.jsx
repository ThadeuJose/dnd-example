import React from "react";
import { Container, Handle } from "./styles";
import { Draggable } from "react-beautiful-dnd";

export default class Task extends React.Component{
    render(){
        return (
            <Draggable draggableId={this.props.task.id} index ={this.props.index}>
                {(provided, snapshot) => (
                    <Container {...provided.draggableProps}                   
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    >                    
                        <Handle  {...provided.dragHandleProps}/>
                        {this.props.task.content}
                    </Container>
                )}                
            </Draggable>
        );
    }
}