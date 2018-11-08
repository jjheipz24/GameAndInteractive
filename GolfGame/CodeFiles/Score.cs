using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class Score : MonoBehaviour {

	public static float score = 0;
	public Text scoreText;

	void Awake(){
		DontDestroyOnLoad (this);
	}

	void Start () {
		scoreText = GetComponent<Text> ();
	}

	void Update () {
			scoreText.text = score.ToString ("f0");
		}

	}
