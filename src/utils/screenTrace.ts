import perf from '@react-native-firebase/perf';

export default async function screenTrace(screenName: string) {
  // Define & start a screen trace
  try {
    const trace = await perf().startScreenTrace(screenName);
    // Stop the trace
    await trace.stop();
  } catch (e) {
    // rejects if iOS or (Android == 8 || Android == 8.1)
    // or if hardware acceleration is off
  }
}
