# CPUs

## 需要避免使用的cpu

虽然AMD cpu可以工作，但我们建议不要使用它们，因为它们没有原生支持，仍然有许多问题困扰着它们。它们需要更多的工作来安装，但对于那些喜欢AMD的人来说，有 [AMD Vanilla Guide](https://vanilla.amd-osx.com).

AMD常见问题:

* Adobe产品并不总是有效，目前Lightroom没有修复
  * 可以在这里找到一些修复: [Adobe Fixes](https://gist.github.com/naveenkrdy/26760ac5135deed6d0bb8902f6ceb6bd)
  * 请注意，这些修复只是禁用了功能，它们不是真正的修复
* Cubase、REAPER和其他音频软件在启动时崩溃
  * REAPER works *if* using the Clang build
  * 目前没有针对Cubase的修复
  * wave插件也会导致崩溃
* 运行在AppleHV框架下的虚拟机将无法工作(即:Parallels 15)
  * VirtualBox运行良好，因为它不使用AppleHV
* Docker崩溃
  * Docker toolbox基于VirtualBox，它的许多功能是不可用的
* Xcode的Apple Watch模拟器在Catalina中坏了
  * Mojave运行良好
* AppleALC不支持麦克风输入，需要VoodooHDA(相当差的音频质量和整体不稳定)
* Ryzen APUs (G系列芯片)上的音频漂移问题
  * USB DAC是唯一的方案，除了新的CPU
* 难以设置睡眠(或在某些系统上不可能)
* 没有CPU电源管理
* 并不是所有的USB端口都能在某些板上工作
  * 这是由于在ACPI中没有分配，您需要手动将它们添加到您的DSDT中
* 更新延迟
* ~~第三代Threadripper不支持裸机~~
  * 现在最新的BIOS和OpenCore引导TRx40 cpu

AMD CPUs:

* AMD Ryzen 1000 系列
* AMD Ryzen 2000 系列
* AMD Ryzen 3000 系列
* AMD Athlon
* AMD ThreadRipper
* AMD FX 系列

在Intel中，由于大多数CPU非常相似，它们在将CPU伪造为受支持的模型时都提供了支持。唯一的缺点是iGPU很少在Atom/Pentium/Celeron这些型号上工作，这意味着在这些cpu上不可能实现廉价的iGPU 黑苹果。关于X99/LGA 2011-V3 cpu，有一个问题是这些cpu从来没有在真正的Mac上发布过，所以当在这些系统上运行macOS时，会出现很多问题。尽量避免

**双Socket用户注意**:注意macOS内核最多只支持64个线程。所以对于高端设备，请注意。对于双套接字用户，你需要在macOS Catalina中使用[AppleMCEReporterDisabler](https://github.com/acidanthera/bugtracker/files/3703498/AppleMCEReporterDisabler.kext.zip) in macOS Catalina

* Intel Atoms
* Intel Celerons
* Intel Pentiums
* Intel X79/LGA 2011
* Intel X99/LGA 2011-V3
* Intel X299/LGA-2066

::: tip 推荐

因此，我们对cpu的总体建议是:

* 半现代消费级Intel cpu
  * macOS支持Comet Lake中的Ivy Bridge
:::

## 不支持的cpu

因此，对于完全不支持的cpu，你会被分为两个阵营:要么太旧而不能运行，要么太新而补丁不支持

**太老跑不动**:

这主要包括缺少Mojave及更新版本所需的SSE4.2指令集的cpu，您可以通过替换遥测插件来解决这个问题，但并不理想。参见 [trashOS repo](https://github.com/khronokernel/trashOS) 了解更多信息

* Wolfdale (Intel Core2 Duo 系列)
  * E7xxx
  * E8xxx
* Yorkfield (Intel Core2 Quad 系列)
  * E8xxx
  * E9xxx

然后是缺少SSE4.1和旧的指令集的cpu，这些支持被卡在OS X 10.11 El Capitan上
