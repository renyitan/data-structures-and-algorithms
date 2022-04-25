public class Solution {
    public int[][] MatrixReshape(int[][] mat, int r, int c) {
        int[][] newMat = new int[r][];
        
        // create the col array for each row
        for (int n=0; n < newMat.Length; n++) {
            newMat[n] = new int[c];
        }
        
        int ROWS = mat.Length;
        int COLS = mat[0].Length;
        
        if (ROWS == 0) {
            return mat;
        }
        if (r*c != ROWS*COLS) {
            return mat;
        }
        
        int i=0, j=0;
        
        for (int row=0; row<ROWS; row++) {
            
            
            for (int col=0; col<COLS;col++) {
                if (j >= c) {
                    i++;
                    j = 0;
                }
                newMat[i][j] = mat[row][col];
                j++;
            }
        }
        return newMat;
    }
}