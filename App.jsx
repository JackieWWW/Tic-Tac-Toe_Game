import React from 'react';

// board initialize

var board = function(n) {
  var result = [];
  for(var i = 0; i < n; i++) {
    var row = [];
    for(var j = 0; j < n; j++) {
      row.push(' ');
    }
    result.push(row);
  }
  return result;
};

// player1: 'O';
  // player2: 'X';

var checkStatus = function(n) {
  var a = '0'.repeat(n);
  var b = 'X'.repeat(n);
  var win = false;
  // check row
  this.board.forEach( row => {
    if(row.join('') === a) {
      this.winner = 'Player1';
      this.gameOver();
      break;
    }
    if(row.join('') === b) {
      this.winner = 'Player2';
      this.gameOver();
      break;
    }
  });
  // check column
  var columns = function (n) {
    var result = [];
    for(var i = 0; i < n; i++) {
      var col = [];
      for(var j = 0; j < n. j++) {
        col.push(this.board[j][i])
      }
      result.push(col)
    }
    return result;
  };

  columnd.forEach(col => {
    if(col.join('') === a) {
      this.winner = 'Player1';
      this.gameOver();
      break;
    }
    if(col.join('') === b) {
      this.winner = 'Player2';
      this.gameOver();
      break;
    }
  });

  var majorDiagnal = function(n) {
    var major = [];
    for(var row = 0, col = n-1; row < n; row++) {
      major.push(this.board[row][col])
      col--;   
    }
    return major.join('');
  };

  var minorDiagnal = function(n) {
    var minor = [];
    for(var row = 0, col = 0; row < n; row++) {
      minor.push(this.board[row][col]);
      col++;
    }
    return minor.join('');
  };

  if(majorDiagnal === a || minorDiagnal === a) {
    this.winnner = 'Player1';
    this.gameOver();
    break;
  }
  if(majorDiagnal === b || minorDiagnal === b) {
    this.winnner = 'Player2';
    this.gameOver();
    break;
  }
};

var gameOver = function() {
  this.gameOn = false; // board click is disabled, can't write any more
  window.alert(`${this.winner} won!`);
};

//onclick, write the board when this.ganeOn = true;
// after each click , checkStatus();













