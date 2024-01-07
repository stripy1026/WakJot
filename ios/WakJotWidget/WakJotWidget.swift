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
      SimpleEntry(date: Date(), data: WakJotModel(text: "왁Jot"))
    }

    func getSnapshot(in context: Context, completion: @escaping (SimpleEntry) -> ()) {
        let entry = SimpleEntry(date: Date(), data: WakJotModel(text: "왁Jot"))
        completion(entry)
    }

    func getTimeline(in context: Context, completion: @escaping (Timeline<Entry>) -> ()) {
        var entries: [SimpleEntry] = []
      
        let userDefaults = UserDefaults(suiteName: "group.wakjot")
        let jsonText = userDefaults?.string(forKey: "wakjotKey")
      
        var input: WakJotModel = WakJotModel(text: "데이터가 없습니다");
      
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
        .configurationDisplayName("왁Jot 위젯")
        .description("위젯으로 메모 확인하기")
    }
}

#Preview(as: .systemSmall) {
    WakJotWidget()
} timeline: {
    SimpleEntry(date: .now, data: WakJotModel(text: "데이터가 없습니다"))
    SimpleEntry(date: .now, data: WakJotModel(text: "데이터가 없습니다"))
}
