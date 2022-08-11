import { useRef, useState } from "react";
import { Button, Form, Input, Label, Modal, ModalBody, ModalFooter,
  ModalHeader } from "reactstrap";
import { post } from "../../Database";

function ItemBoard (props) {
  const [addItemModal, setAddItemModal] = useState(false);
  const toggle = () => setAddItemModal(!addItemModal);
  
  function AddItemModal () {
    const itemName = useRef("name");
    const itemCaption = useRef("caption");
    const itemDesc = useRef("desc");
    const itemAvail = useRef("available");
    const itemPrice = useRef("price");
    const itemImages = useRef("images");
    const itemKeywords = useRef("keywords");

    function addItem (event) {
      event.preventDefault();
      const data = {
        name:         itemName.current.value,
        caption:      itemCaption.current.value,
        description:  itemDesc.current.value,
        available:    itemAvail.current.value,
        price:        itemPrice.current.value,
        images:       itemImages.current.value,
        keywords:     itemKeywords.current.value
      };
      post("php/AddItem.php", data, result => {
        if (result.success) {
          alert(result.message);
        } else
          alert(result.message);
      });
      toggle();
    }

    return (
      <Modal isOpen={addItemModal} toggle={toggle} backdrop="static" fullscreen="sm">
        <Form onSubmit={addItem}>
          <ModalHeader toggle={toggle}>Add an item</ModalHeader>
          <ModalBody>
            <Input name="name" id="name" placeholder="Name" innerRef={itemName} required maxLength={64} />
            <Input name="caption" id="caption" placeholder="Caption" innerRef={itemCaption} required maxLength={64} />
            <Input name="desc" id="desc" placeholder="Description" innerRef={itemDesc} required type="textarea" />
            <Input name="avail" id="avail" placeholder="Available" innerRef={itemAvail} required type="number" />
            <Input name="price" id="price" placeholder="Price" innerRef={itemPrice} required type="number" step={0.01} />
            <Input name="images" id="images" placeholder="Images" innerRef={itemImages} required />
            <Input name="keywords" id="keywords" placeholder="Keywords (separated by ';')" innerRef={itemKeywords} required pattern="^[a-z]+(;[a-z]+)*$" />
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="success">Submit</Button>
            <Button color="danger" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Form>
      </Modal>
    )
  }  

  return (
    <div className="ItemBoard">

      <AddItemModal/>
      <div className="row d-flex gx-5">
        <Button className="col bg-primary w-auto" onClick={()=>setAddItemModal(true)}>Add Item</Button>
        <Input className="col w-auto" id="itemSearch" placeholder="Search for Item Name" name="itemSearch"/>
      </div>
      
      
    </div>
  )
}

export default ItemBoard;
