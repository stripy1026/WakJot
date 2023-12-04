//
//  WakJotWidget.swift
//  WakJotWidget
//
//  Created by 조인우 on 12/3/23.
//

import WidgetKit
import SwiftUI

public struct WakJotModel:Codable {
  let text: String;
}

struct Provider: TimelineProvider {
    func placeholder(in context: Context) -> SimpleEntry {
      SimpleEntry(date: Date(), data: WakJotModel(text: "WakJot"))
    }

    func getSnapshot(in context: Context, completion: @escaping (SimpleEntry) -> ()) {
        let entry = SimpleEntry(date: Date(), data: WakJotModel(text: "WakJot"))
        completion(entry)
    }

    func getTimeline(in context: Context, completion: @escaping (Timeline<Entry>) -> ()) {
        var entries: [SimpleEntry] = []
      
        let userDefaults = UserDefaults(suiteName: "group.wakjot")
        let jsonText = userDefaults?.string(forKey: "wakjotKey")
      
        var input: WakJotModel = WakJotModel(text: "No data");
      
        do {
          if jsonText != nil {
            let jsonData = Data(jsonText?.utf8 ?? "".utf8)
            let valueData = try JSONDecoder().decode(WakJotModel.self, from: jsonData)
                  
            input = valueData
          }
        } catch {
          print(error)
        }

        // Generate a timeline consisting of five entries an hour apart, starting from the current date.
        let currentDate = Date()
        for hourOffset in 0 ..< 5 {
            let entryDate = Calendar.current.date(byAdding: .hour, value: hourOffset, to: currentDate)!
            let entry = SimpleEntry(date: entryDate, data: input)
            entries.append(entry)
        }

        let timeline = Timeline(entries: entries, policy: .atEnd)
        completion(timeline)
    }
}

struct SimpleEntry: TimelineEntry {
    let date: Date
    let data: WakJotModel
}

struct WakJotWidgetEntryView : View {
    var entry: Provider.Entry

    var body: some View {
        VStack {

          Text("Emoji:")
          Text(entry.data.text)
        }
    }
}

struct WakJotWidget: Widget {
    let kind: String = "WakJotWidget"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: Provider()) { entry in
            if #available(iOS 17.0, *) {
                WakJotWidgetEntryView(entry: entry)
                    .containerBackground(.fill.tertiary, for: .widget)
            } else {
                WakJotWidgetEntryView(entry: entry)
                    .padding()
                    .background()
            }
        }
        .configurationDisplayName("My Widget")
        .description("This is an example widget.")
    }
}

#Preview(as: .systemSmall) {
    WakJotWidget()
} timeline: {
    SimpleEntry(date: .now, data: WakJotModel(text: "No data"))
    SimpleEntry(date: .now, data: WakJotModel(text: "No data"))
}
