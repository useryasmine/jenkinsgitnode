 let art_edit_obj = {
     art_edit_form : document.querySelector('#art_edit_form'),
     art_id : document.querySelector('#art_id'),
     art_nom : document.querySelector('#art_nom'),
     art_desig : document.querySelector('#art_desig'),
     art_prix : document.querySelector('#art_prix'),
     art_qt_dispo : document.querySelector('#art_qt_dispo')
}



const check_form = function (){

}

const check_empty = function (input){
     if (input.value == '') return false
     else return true
}

 const check_string = function (input){
      if (input.value.length < 2 || !isNaN(input.value)) return false
      else return true
 }

 const check_number = function (input){
      if (isNaN(input.value)) return false
      else return true
 }

 const show_state = function (input,state){
     if (state == true) {
          input.style.background = 'green';
          input.style.border = 'solid green 1px';
     }
     else {
          input.style.background = 'red';
          input.style.border = 'solid red 1px';
     }

 }

 art_edit_obj.art_nom.addEventListener('keyup',function (){
      show_state(this,check_empty(this) && check_string(this))
 });
 art_edit_obj.art_desig.addEventListener('keyup',function (){
     show_state(this,check_empty(this) && check_string(this))
 });
 art_edit_obj.art_prix.addEventListener('keyup',function (){
     show_state(this,check_empty(this) && check_number(this))
 });
 art_edit_obj.art_qt_dispo.addEventListener('keyup',function (){
     show_state(this,check_empty(this) && check_number(this))
 });

