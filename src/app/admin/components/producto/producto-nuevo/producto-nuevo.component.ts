import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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
    nombre: new FormControl('', [Validators.required]),
    precio: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required),
    descripcion: new FormControl(''),
    imagen: new FormControl('')
  });

  constructor(private productoService:ProductoService,
    public dialogRef: MatDialogRef<ProductoNuevoComponent>) { }

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

   onNoClick(): void {
    this.dialogRef.close();
  }

}
