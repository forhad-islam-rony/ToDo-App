function AddTodo(){
  return(
    <div className="container">
    <div class="row kg-row">
          <div class="col-5">
            <input type="text" name="addTodo" id="addTodo" placeholder="Enter Todo Here"/>
          </div>
          <div class="col-5">
            <input type="date" name="addDate" id="addDate" />
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-success kg-button">Add</button>
          </div>
        </div>
        </div>
  )
}

export default AddTodo;