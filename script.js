const gameSection = document.querySelector("#game-section");

class Tile {
  constructor(row = 5, column = 5, totalTileNumbers = 20) {
    this.row = row;
    this.column = column;
    this.tileCount = this.row * this.column;
    this.totalTileNumbers = totalTileNumbers;
    this.tileNumbers = [];
    this.generateTileNumbers();
  }

  generateTileNumbers = () => {
    for (let i = 1; i <= this.totalTileNumbers; ++i) this.tileNumbers.push(i);
    for (let i = 0; i < this.tileCount; ++i) {
      let index1 = Math.floor(Math.random() * this.tileCount);
      let index2 = Math.floor(Math.random() * this.tileCount);
      let temp = this.tileNumbers[index1];
      this.tileNumbers[index1] = this.tileNumbers[index2];
      this.tileNumbers[index2] = temp;
    }
    console.log(this.tileNumbers);
  };

  createTiles = () => {
    for (let rowCount = 1; rowCount <= this.row; ++rowCount) {
      const rowDivision = document.createElement("div");
      rowDivision.style.display = "grid";
      rowDivision.style.maxWidth = `${(this.column + 1) * 100}px`;
      rowDivision.style.gridTemplateColumns = `repeat(${this.column}, 1fr)`;

      for (let columnCount = 1; columnCount <= this.column; ++columnCount) {
        const tile = document.createElement("div");
        tile.textContent =
          this.tileNumbers[
            (rowCount - 1) * (this.column - 1) + columnCount
          ].toString();
        tile.style.width = "100px";
        tile.style.height = "100px";
        tile.style.border = "1px solid black";
        tile.style.margin = "5px";
        tile.style.display = "grid";
        tile.style.justifyItems = "center";
        tile.style.alignItems = "center";
        tile.addEventListener("click", (e) => {
          console.log(e.target.innerText);
        });
        rowDivision.appendChild(tile);
      }

      rowDivision.style.margin = "0 auto";
      gameSection.appendChild(rowDivision);
    }
  };
}

const t1 = new Tile(4, 4, 40);
t1.createTiles();
