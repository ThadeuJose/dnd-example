import React from "react";
import Task from "../Task/index";
import { Container,Title,TaskList } from "./styles";
import { Droppable, Draggable } from "react-beautiful-dnd";

class InnerList extends React.PureComponent {
    render(){
        return this.props.tasks.map((task,index) => (
            <Task key={task.id} task={task} index={index}/>
        ));
    }
}


export default class Column extends React.Component{
    render(){
        return (
            <Draggable draggableId={this.props.column.id}  index={this.props.index}> 
                {(provided) => (
                    <Container
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                    >
                        <Title {...provided.dragHandleProps}>{this.props.column.title}</Title>
                        <Droppable droppableId={this.props.column.id} type="task">
                            {(provided,snapshot)=>(
                                <TaskList ref = {provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
                                    <InnerList tasks ={this.props.tasks}/>
                                    {provided.placeholder}
                                </TaskList>
                            )}                    
                        </Droppable>
                    </Container>
                )}
            </Draggable>
        );
    }
}