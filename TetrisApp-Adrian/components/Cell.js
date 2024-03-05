import { StyleSheet, View } from "react-native";

import { TETROMINOS } from '../Tetrominos'
import { memo } from "react";

function Cell({ type }) {

  return (
    <CellStyled type={type} color={TETROMINOS[type].color}></CellStyled>
  );
}

export function CellStyled( props ) {

    const border =  props.type === 0 ? 1 : 2

    const styles = StyleSheet.create({
        StyledCell:{
            
            width: 25,
            aspectRatio:1,
            backgroundColor: `${props.color}`,
            borderRightColor: `${props.color}100`,
            borderBottomColor: `${props.color}10`,
            borderTopColor: `${props.color}100`,
            borderLeftColor: `${props.color}30`,
            borderWidth: border
        },
    })

  return (
    <View style={ styles.StyledCell }/>
  );

}

export default memo(Cell)