import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {jsPDF} from 'jspdf'
import autoTable from 'jspdf-autotable';
import { style } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

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

    //MARCA D´ÁGUA
    doc.addImage("assets/back.jpeg","JPEG", 225, 70, 675, 675);

    //TITULO img
    doc.addImage("assets/title2.png","PNG", 365, 20, 375, 90);

    //TÍTULO
    //doc.addFont('krona one',"normal");
   /* doc.setTextColor(21, 31, 93);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(60);
    doc.text('ENERGIN', 370, 90);

    //SUBTÍTULO
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text('Tecnologia e Inovação da Amazônia', 425, 113);*/
    
    //INFORMAÇÕES
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text('ESCOLA ESTADUAL SÃO PEDRO (SE ABRIGADA 225KVA) – MAUÉS/AM', 100, 150);

    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text('Data de Início: 02 de novembro de 2022.', 100, 170);

    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text('Data de Término: 03 de novembro de 2022.', 100, 190);

    //TABELA
    autoTable(doc, {
      
      head: [
            [ //títulos
              {content: 'ID', styles: {cellWidth: 24, fontSize: 8}}, 
              {content: 'DESCRIÇÃO', styles: {cellWidth: 140, fontSize: 8}}, 
              {content: 'DES.', styles: {cellWidth: 40, fontSize: 8}}, 
              {content: 'PRIOR.', styles: {cellWidth: 50, fontSize: 8}}, 
              {content: '02/11/2022', styles: {fontSize: 8, halign: 'center'}}, 
              {content: '03/11/2022', styles: {fontSize: 8, halign: 'center'}}
            ],

            //ESPAÇO EM BRANCO
            [
            { content: '', colSpan: 0, rowSpan: 1, styles: {fillColor: "#3A3838", textColor: "Black", halign: 'center'} }, 
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

    //HORÁRIOS primeiro dia
    doc.setFontSize(7);
    doc.text('08:00', 310, 260);
    doc.text('09:00', 345, 260);
    doc.text('10:00', 380, 260);
    doc.text('11:00', 415, 260);
    doc.text('12:00', 450, 260);
    doc.text('13:00', 485, 260);
    doc.text('14:00', 520, 260);
    doc.text('15:00', 555, 260);
    doc.text('16:00', 590, 260);
    doc.text('17:00', 625, 260);
    doc.text('18:00', 660, 260);

    //HORÁRIOS segundo dia
    doc.setFontSize(7);
    doc.text('08:00', 695, 260);
    doc.text('09:00', 730, 260);
    doc.text('10:00', 765, 260);
    doc.text('11:00', 800, 260);
    doc.text('12:00', 835, 260);
    doc.text('13:00', 870, 260);
    doc.text('14:00', 905, 260);
    doc.text('15:00', 940, 260);
    doc.text('16:00', 975, 260);
    doc.text('17:00', 1010, 260);
    doc.text('18:00', 1045, 260);

    //FOOTER
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text('CNPJ: 05.682.859/0001-41', 30, 700);
    doc.text('Telefone: (92) 3232-7652 Cel.: (92) 99299-9733', 30, 717);
    doc.text('E-mail: energin.amazonia@gmail.com; andre.energin@outlook.com', 30, 734);
    doc.text('Endereço: Rua Professor Castelo Branco, nº 5, Conj. Jardim Yolanda,', 30, 751);
    doc.text('Parque 10 de Novembro.', 30, 768);

    //ASSINATURAS
    //Responsável técnico
    doc.setLineWidth(1);
    doc.setDrawColor(0,0,0)
    doc.line(120, 500, 370, 500);
    doc.setFontSize(8);
    doc.text("Responsável Técnico: Eng. Eletricista Elson", 130, 515);

    //Diretor operacional
    doc.setLineWidth(1);
    doc.setDrawColor(0,0,0)
    doc.line(470, 500, 700, 500);
    doc.setFontSize(8);
    doc.text("Matheus Cardoso – Diretor Operacional", 480, 515);

    //Responsável pelo serviço
    doc.setLineWidth(1);
    doc.setDrawColor(0,0,0)
    doc.line(750, 500, 1050, 500);
    doc.setFontSize(8);
    doc.text("Responsável pelo serviço: Eng. Eletricista Israel Félix ", 760, 515);

    /*
    //SEGUNDA PAG
    doc.addPage("a4", 'landscape');
    */  

    //SAVE
    //doc.output("dataurlnewwindow");
    doc.save("Cronograma de Execução");
    
   
  }
}





 