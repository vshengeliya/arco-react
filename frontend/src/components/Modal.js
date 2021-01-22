 // frontend/src/components/Modal.js

    import React, { Component } from "react";
    import {
      Button,
      Modal,
      ModalHeader,
      ModalBody,
      ModalFooter,
      Form,
      FormGroup,
      Input,
      Label
    } from "reactstrap";

    export default class CustomModal extends Component {


      
      constructor(props) {
        super(props);
        this.state = {
          activeItem: this.props.activeItem
        };
      }
      handleChange = e => {

        console.log(this.state.activeItem.due_date)
        console.log(new Date())
        let { name, value } = e.target;
        if (e.target.type === "checkbox") {
          value = e.target.checked;

          // implelemting "G) update 'completed_time' in the db when marking a todo complete"
          const dateNow = new Date();
          const activeItem = { ...this.state.activeItem, [this.state.activeItem.due_date]: dateNow };
          this.setState({ activeItem });
        }
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
      };
      render() {

        const { toggle, onSave } = this.props;
        return (
          <Modal isOpen={true} toggle={toggle}>
            <ModalHeader toggle={toggle}> Todo Item </ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="title">Title</Label>
                  <Input
                    type="text"
                    name="title"
                    value={this.state.activeItem.title}
                    onChange={this.handleChange}
                    placeholder="Enter Todo Title"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="description">Description</Label>
                  <Input
                    type="text"
                    name="description"
                    value={this.state.activeItem.description}
                    onChange={this.handleChange}
                    placeholder="Enter Todo description"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="due">Due date</Label>
                  <Input
                    type="text"
                    name="due_date"
                    value={this.state.activeItem.due_date}
                    onChange={this.handleChange}
                    placeholder={this.state.activeItem.due_date}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="priority">Priority</Label>
                  <Input
                    type="text"
                    name="priority"
                    value={this.state.activeItem.priority}
                    onChange={this.handleChange}
                    placeholder="Change the priority"
                  />
                </FormGroup>
                <FormGroup check>
                  <Label for="completed">
                    <Input
                      type="checkbox"
                      name="completed"
                      checked={this.state.activeItem.completed}
                      onChange={this.handleChange}
                    />
                    Completed
                  </Label>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                Save
              </Button>
            </ModalFooter>
          </Modal>
        );
      }
    }
