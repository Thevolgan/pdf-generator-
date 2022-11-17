import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {jsPDF} from 'jspdf'
import autoTable from 'jspdf-autotable';
import { style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){

  }

  @ViewChild('content',{static:false}) el!: ElementRef
  title = 'Cronograma de Execução';

  gerarPDF(){
    let doc = new jsPDF({orientation: 'landscape', unit: 'px', hotfixes: ["px_scaling"]});
    //doc.text("hey", 20, 20)
    /*doc.html(this.el.nativeElement,{
      callback:(doc) => {
        doc.save("Cronograma-de-Execução.pdf");
      },
    })*/
    console.log('clicado');
 
    doc.addImage("assets/back.jpeg","JPEG", 200, 70, 700, 700);

    //TÍTULO
    //doc.addFont('krona one',"normal");
    doc.setTextColor(21, 31, 93);
    doc.setFont("arial", "bold");
    doc.setFontSize(60);
    doc.text('ENERGIN', 370, 90);

    //SUBTÍTULO
    doc.setTextColor(0, 0, 0);
    doc.setFont("Arial", "bold");
    doc.setFontSize(12);
    doc.text('Tecnologia e Inovação da Amazônia', 425, 113);
    
    //INFORMAÇÕES
    doc.setTextColor(0, 0, 0);
    doc.setFont("Arial", "bold");
    doc.setFontSize(11);
    doc.text('ESCOLA ESTADUAL SÃO PEDRO (SE ABRIGADA 225KVA) – MAUÉS/AM', 100, 150);

    doc.setTextColor(0, 0, 0);
    doc.setFont("Arial", "bold");
    doc.setFontSize(10);
    doc.text('Data de Início: 02 de novembro de 2022.', 100, 170);

    doc.setTextColor(0, 0, 0);
    doc.setFont("Arial", "bold");
    doc.setFontSize(10);
    doc.text('Data de Término: 03 de novembro de 2022.', 100, 190);

    //TABELA
    autoTable(doc, {
      head: [
            [ //títulos
              {content: 'ID', styles: {cellWidth: 30, fontSize: 8}}, 
              {content: 'DESCRIÇÃO', styles: {cellWidth: 140, fontSize: 8}}, 
              {content: 'DES.', styles: {cellWidth: 40, fontSize: 8}}, 
              {content: 'PRIOR.', styles: {cellWidth: 50, fontSize: 8}}, 
              {content: '02/11/2022', styles: {fontSize: 8}}, 
              {content: '03/11/2022', styles: {fontSize: 8, halign: 'center'}}
            ],

            //ESPAÇO EM BRANCO
            [{ content: '', colSpan: 0, rowSpan: 1, styles: {fillColor: "#3A3838", textColor: "Black", halign: 'center'} }, 
            { content: '', colSpan: 3, rowSpan: 1, styles: {fillColor: "#3A3838", textColor: "Black", halign: 'center'} }, 
            { content: '', colSpan: 1, rowSpan: 1, styles: {fillColor: "White", textColor: "Black", halign: 'center' } },
            { content: '', colSpan: -5, rowSpan: 1, styles: {fillColor: "White", textColor: "Black", halign: 'center' } },
          ],
      ],
      headStyles: {fillColor: [58,56,56], halign: 'center' },
      body: [
        [ //SERVIÇO 1
          {content: '1', styles: {fontSize: 8, fontStyle: 'bold'}}, 
          {content: 'Troca de chave por disjuntor temomagnético', styles: {fontSize: 8, fontStyle: 'bold'}}, 
          {content: 'SIM', styles: {fontSize: 8, fontStyle: 'bold'}}, 
          {content: 'ALTA', styles: {fontSize: 8, fontStyle: 'bold'}}, 
        ],

        [//SERVIÇO 2
          {content: '2', styles: {fontSize: 8, fontStyle: 'bold'}}, 
          {content: 'Troca das cruzetas de madeira por \nfibra da subestação abrigada', styles: {fontSize: 8, fontStyle: 'bold'}},
          {content: 'SIM', styles: {fontSize: 8, fontStyle: 'bold'}}, 
          {content: 'ALTA', styles: {fontSize: 8, fontStyle: 'bold'}},
        ],

      ],
      
      startY: 220,
      theme: 'grid',
      columnStyles: {},

    })

    doc.setLineWidth(1);
    doc.line(1070, 274, 313, 274);

    //HORÁRIOS primeiro dia
    doc.setFontSize(7);
    doc.text('08:00', 320, 260);
    doc.text('09:00', 355, 260);
    doc.text('10:00', 390, 260);
    doc.text('11:00', 425, 260);
    doc.text('12:00', 460, 260);
    doc.text('13:00', 495, 260);
    doc.text('14:00', 530, 260);
    doc.text('15:00', 565, 260);
    doc.text('16:00', 600, 260);
    doc.text('17:00', 635, 260);
    doc.text('18:00', 670, 260);

    //HORÁRIOS segundo dia
    doc.setFontSize(7);
    doc.text('08:00', 705, 260);
    doc.text('09:00', 740, 260);
    doc.text('10:00', 775, 260);
    doc.text('11:00', 810, 260);
    doc.text('12:00', 845, 260);
    doc.text('13:00', 880, 260);
    doc.text('14:00', 915, 260);
    doc.text('15:00', 950, 260);
    doc.text('16:00', 985, 260);
    doc.text('17:00', 1020, 260);
    doc.text('18:00', 1055, 260);

    //FOOTER
    doc.setTextColor(0, 0, 0);
    doc.setFont("Arial", "bold");
    doc.setFontSize(10);
    doc.text('CNPJ: 05.682.859/0001-41', 50, 700);
    doc.text('Telefone: (92) 3232-7652 Cel.: (92) 99299-9733', 50, 717);
    doc.text('E-mail: energin.amazonia@gmail.com; andre.energin@outlook.com', 50, 734);
    doc.text('Endereço: Rua Professor Castelo Branco, nº 5, Conj. Jardim Yolanda,', 50, 751);
    doc.text('Parque 10 de Novembro.', 50, 768);
    
    //SAVE
    doc.output("dataurlnewwindow");
    doc.save("Cronograma de Execução");
    
   
  }
}





 