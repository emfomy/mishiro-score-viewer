import axios from 'axios'

class Home {
  private static _data: any
  private static _live_data: any
  private static _music_data: any
  private static _liveSelect: HTMLSelectElement
  private static _difficultySelect: HTMLSelectElement
  private static _goButton: HTMLButtonElement
  private static _resver: HTMLSpanElement

  private static _difficultyMap = {
    '1': 'Debut',
    '2': 'Regular',
    '3': 'Pro',
    '4': 'Master',
    '5': 'Master+',
    '11': 'Light',
    '12': 'Trick',
    '101': 'OldMaster+'
  }

  private static _colorMap = {
    '1': 'Cute',
    '2': 'Cool',
    '3': 'Passion',
    '4': 'Full'
  }

  public static async main (): Promise<void> {
    try {
      Home._data = (await axios.get('./data.json')).data
      Home._live_data = (await axios.get('./assets/live_data.json')).data
      Home._music_data = (await axios.get('./assets/music_data.json')).data
      Home._liveSelect = document.getElementById('live') as HTMLSelectElement
      Home._difficultySelect = document.getElementById('difficulty') as HTMLSelectElement
      Home._goButton = document.getElementById('go') as HTMLButtonElement
      Home._resver = document.getElementById('resver') as HTMLSpanElement
      Home._addEventListener()
      Home._render()
    } catch (err) {
      Home._resver.innerHTML = 'unknown'
    }
  }

  private static _render () {
    Home._resver.innerHTML = Home._data.version
    const liveIds: string[] = Object.keys(Home._live_data)
    for (let i = 0; i < liveIds.length; i++) {
      const option = document.createElement('option')
      option.value = liveIds[i]
      if (Home._data.default.id === Number(liveIds[i])) {
        option.selected = true
        Home._refreshDifficulty(liveIds[i])
      }
      try {
        const live_item = Home._live_data[Number(liveIds[i])]
        const music_item = Home._music_data[Number(live_item.music_data_id)]
        const name = music_item.name.replace(/\\n/g, '')
        const color = Home._colorMap[live_item.color as '1' | '2' | '3' | '4']
        option.innerHTML = `${liveIds[i]}: ${name} (${color})`
      } catch {
        option.innerHTML = liveIds[i]
      }
      Home._liveSelect.appendChild(option)
    }
    Home._difficultySelect.style.width = Home._liveSelect.offsetWidth + 'px'
  }

  private static _addEventListener () {
    Home._goButton.addEventListener('click', () => {
      // console.log(`${window.location.protocol}//${window.location.host}${window.location.pathname}score.html?id=${Home._liveSelect.value}&difficulty=${Home._difficultySelect.value}`)
      window.location.href = `${window.location.protocol}//${window.location.host}${window.location.pathname.substr(0, window.location.pathname.lastIndexOf('/') + 1)}score.html${Home._liveSelect.value && Home._difficultySelect.value ? `?id=${Home._liveSelect.value}&difficulty=${Home._difficultySelect.value}` : ''}`
    }, false)
    Home._liveSelect.addEventListener('change', (e) => {
      console.log((e.target as HTMLSelectElement).value)
      Home._refreshDifficulty((e.target as HTMLSelectElement).value)
    })
    Home._difficultySelect.addEventListener('change', (e) => {
      console.log((e.target as HTMLSelectElement).value)
    })
  }

  private static _refreshDifficulty (liveId: string) {
    while (Home._difficultySelect.hasChildNodes()) {
      Home._difficultySelect.removeChild(Home._difficultySelect.firstChild as ChildNode)
    }
    for ( const difficulty in Home._live_data[liveId].difficulty ) {
      const diffOption = document.createElement('option')
      diffOption.value = difficulty
      diffOption.innerHTML = Home._difficultyMap[difficulty as '1' | '2' | '3' | '4' | '5' | '11' | '12' | '101']
      if (difficulty === '4') diffOption.selected = true
      Home._difficultySelect.appendChild(diffOption)
    }
  }
}

Home.main()
