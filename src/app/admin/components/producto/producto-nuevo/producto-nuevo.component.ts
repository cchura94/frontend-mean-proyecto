import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Producto } from 'src/app/core/interfaces/producto';
import { ProductoService } from 'src/app/core/services/producto.service';

@Component({
  selector: 'app-producto-nuevo',
  templateUrl: './producto-nuevo.component.html',
  styleUrls: ['./producto-nuevo.component.css']
})
export class ProductoNuevoComponent implements OnInit {

  nombreImagenSeleccionada: string = "Ningun archivo seleccionado"
  imagenSeleccionada?:File
  imgPreview?:string

  productoForm = new FormGroup({
    nombre: new FormControl(this.data.nombre, [Validators.required]),
    precio: new FormControl(this.data.precio, Validators.required),
    stock: new FormControl(this.data.stock, Validators.required),
    descripcion: new FormControl(this.data.descripcion),
    imagen: new FormControl(this.data.imagen)
  });

  constructor(private productoService:ProductoService,
    public dialogRef: MatDialogRef<ProductoNuevoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  imagenInputSeleccionado(fileInputEvent:any){
    console.log(fileInputEvent.target.files[0]);

    this.nombreImagenSeleccionada = fileInputEvent.target.files[0].name
    this.imagenSeleccionada = fileInputEvent.target.files[0]
    this.productoForm.get('imagen')?.setValue(this.imagenSeleccionada)

    if(this.imagenSeleccionada){
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imgPreview = e.target.result
      }
      reader.readAsDataURL(this.imagenSeleccionada);
    }
  }

  guardarProducto(){
    this.productoService.guardarProducto(this.productoForm).subscribe(
      (res:any) => {
        console.log(res)
        this.onNoClick()
      },
      (error) => {
        console.log(error);
      }
    )
  }

  modificarProducto(id:string){
    this.productoService.editarProducto(this.productoForm, id).subscribe(
      (res:any) => {
        console.log(res)
        this.onNoClick()
      },
      (error) => {
        console.log(error);
      }
    )
  }

   onNoClick(): void {
    this.dialogRef.close();
  }

}
