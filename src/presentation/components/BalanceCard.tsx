import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Card, Text } from 'react-native-paper'

type Props = {
  amount: number
  title?: string
}

export function BalanceCard({ amount, title = 'Balance' }: Props) {

  return (
    <Card style={styles.card}>
      <Text variant="titleSmall">{title}</Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 16,
    borderRadius: 12,
  },
  balance: {
    marginTop: 12,
    fontWeight: '700',
  },
})
