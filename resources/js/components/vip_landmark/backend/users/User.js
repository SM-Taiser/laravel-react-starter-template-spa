import React from 'react';
import Pagination from "react-js-pagination";
import * as Helper from '../../frontend/Helper';
import Swal from 'sweetalert2';

class Information extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        formData: {},
        routeUrl: Helper.siteUrl + '/api/info',
        informations: [],
        isAddItem: true,
        activePage: 1,
        itemsCountPerPage: 1,
        totalItemsCount: 1,
        pageRangeDisplayed: 3,
        from: 1
      };
  
      this.onChangeInput = this.onChangeInput.bind(this);
      this.loadItems = this.loadItems.bind(this);
      this.addItem = this.addItem.bind(this);
      this.openModal = this.openModal.bind(this);
      this.editItem = this.editItem.bind(this);
      this.resetItem = this.resetItem.bind(this);
      this.updateItem = this.updateItem.bind(this);

    }
    
    componentDidMount(){
        this.loadItems();
    }

    loadItems(pageNumber){
        axios.get(this.state.routeUrl + '?page='+pageNumber)
        .then(response => {
              this.setState({
                  informations:response.data.informartion.data,
                  itemsCountPerPage:response.data.informartion.per_page,
                  totalItemsCount:response.data.informartion.total,
                  activePage:response.data.informartion.current_page,
                  from:response.data.informartion.from
                })
        })
    }

    onChangeInput(e) {
        this.setState({['formData']: { ...this.state['formData'], [e.target.name]:e.target.value } });
    }
  
    addItem(event){
        this.state.isAddItem = true;
        event.preventDefault();
        const userData = this.state.formData;
        axios.post(this.state.routeUrl, userData)
        .then(response => {
              console.log(response.data);
              this.loadItems();
              $('#itemModal').modal('hide');
              Helper.alertMessage('success','Successfully added');
        })
    }

    resetItem(){
        this.setState({
            formData: {}
        });
    }
    
    openModal(){
         this.resetItem();
         this.state.isAddItem = true;
         $('#itemModal').modal('show');
     }

    editItem(id){
        this.state.isAddItem = false;
        $('#itemModal').modal('show');
        const result = this.state.informations.find(item => item.id === id);
        this.setState({
             formData: result
         });
    }

    updateItem(event){
        event.preventDefault();
        axios.put(this.state.routeUrl+'/' + this.state.formData.id, this.state.formData)
        .then(response => {
            this.loadItems();
            $('#itemModal').modal('hide');
            Helper.alertMessage('success','Successfully updated');
        })
        .catch(error => {
            Helper.alertMessage('error', error);
        })
    }

    deleteItem(id){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
                axios.delete(this.state.routeUrl+'/' + id)
                .then(response => {
                    this.loadItems();
                })

                .catch(error => {
                    Helper.alertMessage('error',error);
                })
                Swal.fire(
                    'Deleted!',
                    'Successfully Deleted',
                    'success'
                )
            }
          })

    }

    render() {
        return (
            <div className="content-wrapper">
                <h1>Information</h1>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <button type="button" class="btn btn-primary" onClick={this.openModal}>
                                 Add info
                                </button>
                            </div>
                            <div className="card-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.informations.map((val, index)=>{
                                               return(
                                                    <tr>
                                                        <td scope="row">{ this.state.from + index}</td>
                                                        <td>{val.title}</td>
                                                        <td>{val.description}</td>
                                                        <td>
                                                            <a href="#" class="btn btn-success btn-sm edit-btn" onClick = {this.editItem.bind(this, val.id)}>
                                                              <i class="fas fa-edit"></i>
                                                            </a>
                                                            
                                                            <a href="#" class="btn btn-danger btn-sm" onClick = {this.deleteItem.bind(this, val.id)}>
                                                              <i class="fas fa-trash"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ) 
                                            })
                    
                                        }
                                        
                                    </tbody>
                                </table>
                            </div>
                            <Pagination
                                activePage = {this.state.activePage}
                                itemsCountPerPage = {this.state.itemsCountPerPage}
                                totalItemsCount = {this.state.totalItemsCount}
                                pageRangeDisplayed = {this.state.pageRangeDisplayed}
                                onChange = {this.loadItems}
                                itemClass = 'page-item'
                                linkClass = 'page-link'
                             />
                        </div>
                    </div>
                </div>
                {/* Modal */}
                <div class="modal fade" id="itemModal" tabindex="-1" role="dialog" aria-labelledby="itemModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="itemModalLabel"> {this.state.isAddItem ? 'Add Information': 'Edit Information'}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={this.state.isAddItem ? this.addItem : this.updateItem}>
                                <div className="form-group">
                                    <label> Title: </label>
                                    <input name="title" type="text" value={this.state.formData.title || ''} className="form-control" onChange={this.onChangeInput} />
                                </div>
                                <div className="form-group">
                                    <label> Description: </label>
                                    <textarea name="description" className="form-control" value={this.state.formData.description || ''} onChange={this.onChangeInput}></textarea>
                                </div>
                                <div class="modal-footer">
                                   <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                   <button type="submit" class="btn btn-primary">Save changes</button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }
export default Information;

