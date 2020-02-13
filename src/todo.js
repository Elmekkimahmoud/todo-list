import React, { Component } from 'react';
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {

            list: [], inputValue:'', isClicked: false, textdeco:'none'
        };
       
    }


    changeTask=(e)=>{
            
        this.setState({inputValue: e.target.value});
        
        }

    addList=()=>{
        this.setState({
            list:[...this.state.list, {"val":this.state.inputValue,"txt":"none"}]
        })
       
    }
    

    deletFun=(index)=>{
      const deleteIndex = this.state.list.slice()
        deleteIndex.splice(index,1)
        this.setState({
         list: deleteIndex
     })
       

    }
    
    changStyle=(index)=>{
        const chanstl = this.state.list.filter((el,i)=>{
            if(index==i) {return el.txt= 'line-through'   }
            else { return el.txt= el.txt }
        }   )
        this.setState({
            list: chanstl
        })
    }

 


    render() { 
        return ( 

            <section>

                <header>
                    <div className="add">
                        <h1>To-Do App!</h1>
                        <h4>Add New To-Do</h4>
                        <input type="text"  id="input-task" placeholder="Enter new task" onChange={this.changeTask} />  
                        <button id="butadd" onClick={this.addList}> Add </button> 
                    </div>

                </header>

                <main>
                    <section className="main-up">
                        <div>
                            <h2>Let's get some work done!</h2>
                        </div>
                        <div className="ligne">
                        </div>
                    </section>

                    <section className="tasks" id="taskss">
                        <div className="edit-task" id="old">
                          {this.state.list.map((el, index)=> <div key= {index} className='items'>
                              <button className="complete" onClick={this.changStyle.bind(this,index)}   > {el.txt== 'line-through'?'Undo':'Complete'}  </button>
                              <button className="delete"    onClick={this.deletFun.bind(this,index)}> delete </button>
                              <span style={{textDecoration:el.txt}}>{el.val}</span>
                              
                              
                              </div> )}
                             
                        </div>
                    </section>

                </main>

            </section>


         );
    }
}
 
export default Todo;