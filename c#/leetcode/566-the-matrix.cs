public class Solution {
    public int[][] MatrixReshape(int[][] mat, int r, int c) {
        int ROWS = mat.Length;
        int COLS = mat[0].Length;
        
        if (ROWS*COLS != r*c) {
            return mat;
        }
        
        int[][] res = new int[r][];
        
        for (int i = 0; i < r; i++) {
            res[i] = new int[c];
        }
        
        int x=0, y=0;
        
        for (int i =0; i < r; i++) {
            for (int j = 0; j < c; j++) {
                if ((x<ROWS) || (y<COLS)) {
                    if (y>=COLS) {
                           y=0;
                    x++;
                    }
                 
                }
                res[i][j] = mat[x][y];
                y++;
            }
        }
        
        return res;
    }
}