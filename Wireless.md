# 无线

对于无线，请记住，macOS对原生Wifi和蓝牙卡的选择非常有限。Midi列出了支持的模型，您可以在[r/Hackintosh FAQ](https://www.reddit.com/r/hackintosh/wiki/faq#wiki_wifi_compatibility)中找到这些模型。对于那些购买主板或只想寻找专用无线网卡的人，请记住以下无线网卡不支持或兼容性可能有限:

**完全不支持的无线卡**

* 任何基于Realtek的WiFi

**避免使用的无线网卡**

* 任何基于USB的(Ralink和Realtek)通常不那么可靠，一些macOS功能，如Handoff和Apple Watch Unlock可能无法正常工作
  * 许多基于USB的WiFi卡可以“工作”，但可能依赖于第三方软件，不能原生工作
  * 一些用户表示使用蓝牙USB适配器收效甚微，但 [YMMV](https://www.urbandictionary.com/define.php?term=ymmv)
* 最近的开发工作已经在macOS中为英特尔无线网卡启用了(有限的)WiFi和蓝牙功能
  * ***使用英特尔Wifi卡仍然有一些重要的注意事项，包括但不限于Wifi性能、中断连续性/切换/Apple Watch解锁等问题。避免使用它们，除非你被迫使用，比如使用焊接WiFi或CNVi的笔记本电脑***
  * 通过 [**itwlm.kext** 或 **Airportitwlm.kext**](https://github.com/OpenIntelWireless/itlwm)启用英特尔WiFi
  * 通过 [**IntelBluetoothFirmware.kext**](https://github.com/OpenIntelWireless/IntelBluetoothFirmware) 启用英特尔蓝牙(与macOS 12及更新版本的[**BlueToolFixup.kext**](https://github.com/acidanthera/BrcmPatchRAM) 配对，因为苹果的蓝牙协议栈发生了变化)
  * 兼容性总是在变化，所以请参阅 [打开英特尔WIFI无线文档](https://openintelwireless.github.io) 和 [打开英特尔无线GitHub仓库](https://github.com/OpenIntelWireless) 了解更新的安装说明和兼容性
* Killer WiFi 卡的可用性取决于型号
  * 最近的 Killer 无线网卡现在使用英特尔WiFi芯片组
  * 这意味着它们**可以**在macOS中工作，与上述相同的注意事项和兼容性限制

那些想要一个支持的型号列表的人可以查看[无线购买指南](https://sumingyd.github.io/Wireless-Buyers-Guide/)
