import { StyleSheet, View } from "react-native";

import { PIEZAS } from '../Piezas'
import { memo } from "react";

function Celdillas({ type }) {

  return (
    <EstiloCeldas type={type} color={PIEZAS[type].color}></EstiloCeldas>
  );
}

export function EstiloCeldas( props ) {
    const styles = StyleSheet.create({
        StyledCell:{
            
            width: 25,
            aspectRatio:1,
            backgroundColor: `${props.color}`,
            borderRightColor: `${props.color}100`,
            borderBottomColor: `${props.color}10`,
            borderTopColor: `${props.color}100`,
            borderLeftColor: `${props.color}30`,
            borderWidth: 2
        },
    })

  return (
    <View style={ styles.StyledCell }/>
  );

}

export default memo(Celdillas)