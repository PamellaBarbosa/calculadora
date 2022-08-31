import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class App extends Component {
  render() {
    return(
      
      <View style = {estilo.container}>

        <div style = {estilo.boxApp}>
          <div style = {estilo.textTitle}>QuickCalculator</div>
            <div style = {estilo.positionBtn}>
              <div style = {estilo.org}>

                <div style = {estilo.squareDisplay}>
                  <Text style = {estilo.textDisplay}>0</Text>
                </div>

                  <button className = 'btn' style = {estilo.btn}><Text style = {estilo.textBtn}>AC</Text></button>
                  <button className = 'btn' style = {estilo.btn}><Text style = {estilo.textBtn}>+/-</Text></button>
                  <button className = 'btn' style = {estilo.btn}><Text style = {estilo.textBtn}>%</Text></button>
                  <button className = 'btn' style = {estilo.btn}><Text style = {estilo.textBtn}>/</Text></button>
                  <button className = 'btn' style = {estilo.btn}><Text style = {estilo.textBtn}>7</Text></button>
                  <button className = 'btn' style = {estilo.btn}><Text style = {estilo.textBtn}>8</Text></button>
                  <button className = 'btn' style = {estilo.btn}><Text style = {estilo.textBtn}>9</Text></button>
                  <button className = 'btn' style = {estilo.btn}><Text style = {estilo.textBtn}>x</Text></button>
                  <button className = 'btn' style = {estilo.btn}><Text style = {estilo.textBtn}>4</Text></button>
                  <button className = 'btn' style = {estilo.btn}><Text style = {estilo.textBtn}>5</Text></button>
                  <button className = 'btn' style = {estilo.btn}><Text style = {estilo.textBtn}>6</Text></button>
                  <button className = 'btn' style = {estilo.btn}><Text style = {estilo.textBtn}>-</Text></button>
                  <button className = 'btn' style = {estilo.btn}><Text style = {estilo.textBtn}>1</Text></button>
                  <button className = 'btn' style = {estilo.btn}><Text style = {estilo.textBtn}>2</Text></button>
                  <button className = 'btn' style = {estilo.btn}><Text style = {estilo.textBtn}>3</Text></button>
                  <button className = 'btn' style = {estilo.btn}><Text style = {estilo.textBtn}>+</Text></button>
                  <button className = 'btn' style = {estilo.btnZero}><Text style = {estilo.textBtn}>0</Text></button>
                  <button className = 'btn' style = {estilo.btn}><Text style = {estilo.textBtn}>,</Text></button>
                  <button className = 'btn' style = {estilo.btn}><Text style = {estilo.textBtn}>=</Text></button>
                
              </div>
            </div>
          </div>
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flex: '1px',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    
    
  },
  btn: {
    width: '10px',
    height: '20px',
    padding: '25px',
    borderRadius: '15px', 
    backgroundColor: '#f5f5f5', 
    margin: '1px',
    marginLeft: '2px',
    marginRight: '5px',
    marginTop: '2px', 
    marginBottom: '5px',
    justifyContent: 'center', //texto ao centro
    alignItems: 'center', //texto ao centro
    display: 'flex' //texto ao centro
  },
  positionBtn: {
    marginLeft: '55px',
    marginRight: '50px',
    flexWrap: 'wrap',
    display: 'flex'
  },
  boxApp: {
    width: '350px',
    height: '580px',
    borderRadius: '5px',
    marginTop: '50px',
    backgroundColor: '#1B2631'
  },
  textBtn: {
    fontFamily: 'verdana',
    fontSize: '15px',
    justifyContent: 'center', 
    display: 'flex' 
    
  },
  btnZero: {
    width: '115px',
    height: '15px',
    padding: '25px',
    borderRadius: '15px', 
    backgroundColor: '#f5f5f5',
    margin: '1px',
    marginLeft: '2px',
    marginRight: '5px',
    marginTop: '2px', 
    marginBottom: '5px',
    justifyContent: 'center', //texto ao centro
    alignItems: 'center', //texto ao centro
    display: 'flex' //texto ao centro
    
  }, 
  org: {
    display: 'contents'
  }, 
  squareDisplay: {
    width: '180px',
    height: '15px',
    padding: '25px',
    borderRadius: '30px', 
    backgroundColor: '#f5f5f5',
    border: '1px solid black',
    margin: '5px',
    marginTop: '50px',
    marginRight: '5px',
    marginLeft: '5px',
    marginBottom: '20px', 
    textAlign: 'right'

  },
  textDisplay : { 
    fontFamily: 'verdana',
    fontSize: '20px'

  },
  textTitle: { 
    color: '#FFFAF0',
    fontFamily: 'verdana',
    fontSize: '15px',
    marginRight: '180px',
    marginLeft: '15px',
    marginTop: '20px',
    marginBottom: '20px'
  }
})