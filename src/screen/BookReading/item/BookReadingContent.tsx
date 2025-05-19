import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

const AnimatedText = Animated.createAnimatedComponent(Text);

interface BookReadingContentProps {
  fontSize: number;
  bgColor: string;
  animatedTextStyle: any;
}

export function BookReadingContent({ fontSize, bgColor, animatedTextStyle }: BookReadingContentProps) {
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={true}>
      <View style={styles.contentContainer}>
        <AnimatedText
          style={[
            animatedTextStyle,
            {
              color: bgColor === '#000000' ? '#ffffff' : '#000000',
              lineHeight: fontSize * 1.5,
            },
          ]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AnimatedText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: { 
    flex: 1 
  },
  contentContainer: { 
    padding: 20, 
    paddingTop: 10 
  },
}); 